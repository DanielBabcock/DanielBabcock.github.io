Launch local server: python3 -m http.server

TODO:

- profile picture to contact page
- update services, hero projects and carousel project to feed from json for easier updates and less cluttered html
- projects button for more info modal, and button for live preview with resizer modal.
- Privacy and Terms pages
- fill in any empty alt="..." tags
- move any temporary inline styles to .css
- add informational links to services cards
- create dark mode: https://getbootstrap.com/docs/5.3/customize/color-modes/

Done:

- !Services page!
- !Contact form!
- improve homepage waves at all screen sizes

Notes:

- Bootstrap forms: <!-- * * * * * * * * * * * * * * *-->
  <!-- * * SB Forms Contact Form * *-->
  <!-- * * * * * * * * * * * * * * *-->
  <!-- This form is pre-integrated with SB Forms.-->
  <!-- To make this form functional, sign up at-->
  <!-- https://startbootstrap.com/solution/contact-forms-->
  <!-- to get an API token!-->
  <!-- <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                    <div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </form> -->
