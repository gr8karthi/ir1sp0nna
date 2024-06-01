// copyright.js
class CopyrightNotice extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- Copyright Start -->
    <div class="container-fluid copyright bg-dark py-4">
        <div class="container text-center">
            <p class="mb-2">Copyright &copy; <a class="fw-semi-bold" href="#">IRIS</a>, All Right Reserved.
            </p>
            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            <p class="mb-0">Designed By <a class="fw-semi-bold" href="https://www.youtube.com/channel/UCFPkhmtVuhlS0MLUqX_xV5w">Karthi the BA</a> </p>
        </div>
    </div>
    <!-- Copyright End -->


    `;
  }
}

customElements.define('copyright-notice', CopyrightNotice);
