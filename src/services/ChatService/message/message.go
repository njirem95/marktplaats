package message

import "websocket"

type Message struct {
	ws websocket.Websocket
}

// SendMessage uses ws.Send to send a message to the client.
func (m *Message) SendMessage(message string) error {
	err := m.ws.Send(message)
	if err != nil {
		return err
	}

	return nil
}
