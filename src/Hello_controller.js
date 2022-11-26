import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["booking-modal", "form"]

    close(event) {
        event.preventDefault();

        this.modalTarget.close();

        this.formTarget.reset() // or find by id selector
    }
}