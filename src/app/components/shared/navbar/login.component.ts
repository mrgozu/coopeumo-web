import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
<form class="px-4 py-3" >
            <div class="mb-3">
              <label for="exampleDropdownFormEmail1" class="form-label">Usuario</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword1" class="form-label">Constraseña</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                <label class="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
