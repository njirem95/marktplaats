package payment

type Payment struct {
}

type Handler interface {
	Process(payment Payment)
}

type handler struct {
}

func (h *handler) Process(payment Payment) {

}

func New() *handler {
	return &handler{}
}
