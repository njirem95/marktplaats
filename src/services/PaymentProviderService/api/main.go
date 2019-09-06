package main

import (
	"fmt"
	"net/http"
)

func handleHTTPRequest(w http.ResponseWriter, r *http.Request) {

}

func main() {
	fmt.Println("hoi")
	mx := &http.ServeMux{}

	mx.HandleFunc("/api/v1", handleHTTPRequest)
}
