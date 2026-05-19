import { useEffect, useMemo, useState } from 'react'
import { obtenerPersonas, guardarPersona } from "./services/personaService";
import { obtenerCategorias, guardarCategoria } from "./services/categoriaService";
import { obtenerTurnos, guardarTurno, actualizarEstadoTurno } from "./services/turnoService";

const STATUS_OPTIONS = ['reservado', 'en espera', 'atendido', 'cancelado']

export default function App() {
  const [persons, setPersons] = useState([])
  const [categories, setCategories] = useState([])
  const [turns, setTurns] = useState([])

  const [personForm, setPersonForm] = useState({ nombre: '', correo: '', numero_documento: '' })
  const [categoryForm, setCategoryForm] = useState({ nombre: '', descripcion: '' })
  const [turnForm, setTurnForm] = useState({ persona_id: '', categoria_turno_id: '', estado: 'reservado' })

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [personas, categorias, turnos] = await Promise.all([
          obtenerPersonas(),
          obtenerCategorias(),
          obtenerTurnos()
        ]);
        setPersons(personas);
        setCategories(categorias);
        setTurns(turnos);
      } catch (error) {
        console.error('Error cargando datos:', error);
      }
    };
    cargarDatos();
  }, []);

  const stats = useMemo(() => {
    const counts = STATUS_OPTIONS.reduce((acc, status) => {
      acc[status] = turns.filter((t) => t.estado === status).length
      return acc
    }, {})
    return { totalPersons: persons.length, totalCategories: categories.length, totalTurns: turns.length, ...counts }
  }, [persons, categories, turns])

  const handlePersonSubmit = async (e) => {
    e.preventDefault()
    if (!personForm.nombre.trim() || !personForm.correo.trim() || !personForm.numero_documento.trim()) return
    try {
      const nueva = await guardarPersona(personForm);
      setPersons((prev) => [...prev, nueva])
      setPersonForm({ nombre: '', correo: '', numero_documento: '' })
    } catch (error) {
      console.error('Error guardando persona:', error)
    }
  }

  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    if (!categoryForm.nombre.trim() || !categoryForm.descripcion.trim()) return
    try {
      const nueva = await guardarCategoria(categoryForm);
      setCategories((prev) => [...prev, nueva])
      setCategoryForm({ nombre: '', descripcion: '' })
    } catch (error) {
      console.error('Error guardando categoría:', error)
    }
  }

  const handleTurnSubmit = async (e) => {
    e.preventDefault()
    if (!turnForm.persona_id || !turnForm.categoria_turno_id) return
    try {
      const nuevo = await guardarTurno({
        persona_id: Number(turnForm.persona_id),
        categoria_turno_id: Number(turnForm.categoria_turno_id),
        estado: turnForm.estado
      });
      setTurns((prev) => [...prev, nuevo])
      setTurnForm({ persona_id: '', categoria_turno_id: '', estado: 'reservado' })
    } catch (error) {
      console.error('Error guardando turno:', error)
    }
  }

  const updateTurnStatus = async (turnId, estado) => {
    try {
      await actualizarEstadoTurno(turnId, estado);
      setTurns((prev) => prev.map((t) => t.id === turnId ? { ...t, estado } : t))
    } catch (error) {
      console.error('Error actualizando estado:', error)
    }
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__content">
          <span className="badge">Frontend React + Docker</span>
          <h1>Sistema de turnos para la Tienda Mi Tierrita 24/7</h1>
          <p>Un frontend para registrar personas, clasificar solicitudes y controlar el estado de cada turno.</p>
        </div>
        <div className="hero__stats">
          <StatCard label="Personas" value={stats.totalPersons} />
          <StatCard label="Categorías" value={stats.totalCategories} />
          <StatCard label="Turnos" value={stats.totalTurns} />
          <StatCard label="En espera" value={stats['en espera']} />
        </div>
      </header>

      <main className="grid">
        <Section title="Registrar personas" description="Captura los datos básicos del cliente que solicita atención.">
          <form className="form" onSubmit={handlePersonSubmit}>
            <input placeholder="Nombre completo" value={personForm.nombre} onChange={(e) => setPersonForm({ ...personForm, nombre: e.target.value })} />
            <input placeholder="Correo electrónico" value={personForm.correo} onChange={(e) => setPersonForm({ ...personForm, correo: e.target.value })} />
            <input placeholder="Número de documento" value={personForm.numero_documento} onChange={(e) => setPersonForm({ ...personForm, numero_documento: e.target.value })} />
            <button className="btn btn--primary" type="submit">Guardar persona</button>
          </form>
        </Section>

        <Section title="Crear categoría de turno" description="Define el tipo de servicio para organizar la atención.">
          <form className="form" onSubmit={handleCategorySubmit}>
            <input placeholder="Nombre de la categoría" value={categoryForm.nombre} onChange={(e) => setCategoryForm({ ...categoryForm, nombre: e.target.value })} />
            <textarea placeholder="Descripción" value={categoryForm.descripcion} onChange={(e) => setCategoryForm({ ...categoryForm, descripcion: e.target.value })} rows={3} />
            <button className="btn btn--primary" type="submit">Guardar categoría</button>
          </form>
        </Section>

        <Section title="Asignar turno" description="Relaciona una persona con una categoría y define el estado inicial.">
          <form className="form" onSubmit={handleTurnSubmit}>
            <select value={turnForm.persona_id} onChange={(e) => setTurnForm({ ...turnForm, persona_id: e.target.value })}>
              <option value="">Selecciona una persona</option>
              {persons.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.codigo_persona} - {person.nombre}
                </option>
              ))}
            </select>
            <select value={turnForm.categoria_turno_id} onChange={(e) => setTurnForm({ ...turnForm, categoria_turno_id: e.target.value })}>
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.codigo_categoria} - {category.nombre}
                </option>
              ))}
            </select>
            <select value={turnForm.estado} onChange={(e) => setTurnForm({ ...turnForm, estado: e.target.value })}>
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <button className="btn btn--primary" type="submit">Generar turno</button>
          </form>
        </Section>

        <Section title="Personas registradas" description="Listado de clientes en la base de datos.">
          <Table
            headers={["Código", "Nombre", "Correo", "Documento"]}
            emptyText="Aún no hay personas registradas."
            rows={persons.map((person) => [
              <span className="code-pill" key={`${person.id}-code`}>{person.codigo_persona}</span>,
              person.nombre,
              person.correo,
              person.numero_documento,
            ])}
          />
        </Section>

        <Section title="Categorías creadas" description="Tipos de atención disponibles.">
          <Table
            headers={["Código", "Nombre", "Descripción"]}
            emptyText="Aún no hay categorías creadas."
            rows={categories.map((category) => [
              <span className="code-pill" key={`${category.id}-code`}>{category.codigo_categoria}</span>,
              category.nombre,
              category.descripcion,
            ])}
          />
        </Section>

        <Section title="Turnos" description="Control visual de la situación de cada turno.">
          <Table
            headers={["Turno", "Persona", "Categoría", "Estado", "Acciones"]}
            emptyText="Aún no hay turnos generados."
            rows={turns.map((turn) => {
              const person = persons.find((p) => Number(p.id) === Number(turn.persona_id))
              const category = categories.find((c) => Number(c.id) === Number(turn.categoria_turno_id))
              return [
                <span className="code-pill" key={`${turn.id}-turn`}>{turn.numero_turno}</span>,
                <div key={`${turn.id}-person`}>
                  <strong>{person?.codigo_persona || '—'}</strong>
                  <div className="muted">{person?.nombre || 'Sin persona'}</div>
                </div>,
                <div key={`${turn.id}-category`}>
                  <strong>{category?.codigo_categoria || '—'}</strong>
                  <div className="muted">{category?.nombre || 'Sin categoría'}</div>
                </div>,
                <span className={`status status--${turn.estado.replace(/\s/g, '-')}`} key={`${turn.id}-status`}>{turn.estado}</span>,
                <select key={`${turn.id}-actions`} value={turn.estado} onChange={(e) => updateTurnStatus(turn.id, e.target.value)}>
                  {STATUS_OPTIONS.map((status) => <option key={status} value={status}>{status}</option>)}
                </select>
              ]
            })}
          />
        </Section>
      </main>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}

function Section({ title, description, children }) {
  return (
    <section className="panel">
      <div className="panel__head">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

function Table({ headers, rows, emptyText }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length ? rows.map((row, index) => (
            <tr key={index}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
          )) : (
            <tr><td className="empty" colSpan={headers.length}>{emptyText}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}