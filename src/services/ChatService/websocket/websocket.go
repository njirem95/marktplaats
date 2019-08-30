package websocket

type Websocket interface {
	Write(message string) error
}

type GorillaWebSocket struct{}
type DefaultWebSocket struct{}
