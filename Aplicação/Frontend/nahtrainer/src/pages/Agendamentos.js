// src/pages/Agendamentos.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal, Button, Form } from "@themesberg/react-bootstrap";

const localizer = momentLocalizer(moment);

const Agendamentos = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ title: "", start, end });
    setShowModal(true);
    setIsEditing(false);
  };

  const handleSelectEvent = (event) => {
    setCurrentEvent(event);
    setNewEvent({ title: event.title, start: event.start, end: event.end });
    setShowModal(true);
    setIsEditing(true);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEvents(events.map(event => (event.id === currentEvent.id ? newEvent : event)));
    } else {
      setEvents([...events, { ...newEvent, id: events.length }]);
    }
    setShowModal(false);
    setNewEvent({ title: "", start: "", end: "" });
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event.id !== currentEvent.id));
    setShowModal(false);
    setNewEvent({ title: "", start: "", end: "" });
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Editar Agendamento" : "Cadastrar Agendamento"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEvent}>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Turma ou Individual"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Início</Form.Label>
              <Form.Control
                type="datetime-local"
                value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fim</Form.Label>
              <Form.Control
                type="datetime-local"
                value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isEditing ? "Salvar Alterações" : "Adicionar"}
            </Button>
            {isEditing && (
              <Button variant="danger" className="ms-2" onClick={handleDeleteEvent}>
                Excluir
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Agendamentos;
