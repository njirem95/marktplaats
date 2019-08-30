package main

import (
	"fmt"
	"log"
	"net/http"
)

func handleWSRequest(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there")
}

func main() {
	http.HandleFunc("/", handleWSRequest)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
