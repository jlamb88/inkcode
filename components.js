class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     
      <div class="header-logo">
        <svg viewBox="0 0 236 58" aria-label="Full Logo" role="img" preserveAspectRatio="xMidYMid meet">
          <use href="#fullLogo"/>
        </svg>
      </div>
      <div class="header-nav">
        <input 
          type="checkbox" id="nav-toggle" class="nav-toggle"
          aria-controls="main-nav"
        >
        <label 
          for="nav-toggle" class="nav-toggle-label" aria-label="navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="nav-overlay"></div>
        <nav class="main-nav">
          <svg class="mini-logo">
            <use href="assets/logos.svg#miniLogo" />
          </svg>
      <ul class="nav-items">
        <li class="has-submenu">
          <input type="checkbox" id="ink-toggle" class="submenu-toggle"
          aria-haspopup="true">
          <label for="ink-toggle">
            Ink <span class="chevron">&#x25BE;</span>  <!-- Unicode ▼ -->
          </label>
          <ul class="submenu" role="menu">
            <li><a href="#" role="menuitem">Brand Design</a></li>
            <li><a href="#" role="menuitem">Web Design</a></li>
            <li><a href="#" role="menuitem">Print Media</a></li>
          </ul>
        </li>

        <li class="has-submenu">
          <input type="checkbox" id="code-toggle" class="submenu-toggle">
          <label for="code-toggle">
            Code <span class="chevron">&#x25BE;</span>
          </label>
          <ul class="submenu">
            <li><a href="code.html/#webdevelop">Web Development</a></li>
            <li><a href="code.html/#SEO">SEO & Performance</a></li>
            <li><a href="code.html/#hosting">Web Hosting & Maintenance</a></li>
          </ul>
        </li>
        <li><a href="about.html">CTRL + Us</a></li>
        <li><a href="#contact">Hit Us Up</a></li>
      </ul>
    </nav>
      </div>
  
    `;
  }
}

customElements.define('header-comp', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     
      <section class="contact" id="contact">
      <span>Get In Touch</span>
      <h2>Ready To Collaborate?</h2>
      <script type="text/javascript"> var submitted=false</script>
      <iframe
        name="hiddenSubmit"
        id="hiddenSubmit"
        style="display: none;"
        onload="if(submitted)
        {window.location='submit.html'};">
      </iframe>
      <form
      class="contact-form"
      action="https://docs.google.com/forms/d/e/1FAIpQLSdGSbl2NHThGbI2LvTBIf-UBqRXg71cmHLuW-JlBYoeza8rBQ/formResponse"
      method="post"
      target="hiddenSubmit"
      onSubmit="submitted=true"
      >
        <input type="text" name="entry.2005620554" placeholder="Name*">
        <input type="email" name="entry.1045781291" placeholder="Email*">
        <input type="tel" name="entry.1166974658" placeholder="Phone">

        <label for="entry.839337160">I Want To Talk About...</label>
        <select name="entry.839337160" id="entry.839337160">
          <option value="Making A Website">Making A Website</option>
          <option value="Updating My Website">Updating My Website</option>
          <option value="Improving My Searches">Improving My Searches</option>
          <option value="Designing Something Pretty">Designing Something Pretty</option>
          <option value="Hosting and Maintaining My Website">Hosting and Maintaining My Website</select>
        </select>
        <textarea name="entry.1389680958" placeholder="Your Message or Questions"></textarea>
        <button type="submit">Submit</button>
      </form>
        <img class="waves"
        src="assets/wavesObliqPurple.svg" width="100%"> 
  </section>


  <footer class="footer">
      <div>
        <svg class="footer-logo">
          <use href="#fullLogo"></use>
        </svg>
      </div>
      <div class="social">
        <img src="assets/facebook.svg" width="30px"/>
        <img src="assets/instagram.svg" width="30px"/>
        <img src="assets/linkedIn.svg" width="30px"/>
        </div>
      </div>
      <nav class="nav-footer">
        <h4>SERVICES</h4>
        <ul aria-label="Services menu">
          <li><a href="ink.html/#webdesign">Web Design</a></li>
          <li><a href="code.html/#development">Web Development</a></li>
          <li><a href="code.html/#SEO">Search Engine Optimization (SEO)</a></li>
          <li><a href="code.html/#hosting">Web Hosting</a></li>
          <li><a href="ink.html">Graphic Design</a></li>
        </ul>
        <h4>LINKS</h4>
        <ul aria-label="Links Menu">
          <li><a href="code.html/#pricing">Pricing</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
        </nav>
      <section class="contact-us">
        <div class="contact-row">
          <img src="assets/email.svg" width="30"/>
          <a mailto="info@inkandcode.com">info@inkandcode.com</a>
        </div>
        <div class="contact-row">
          <img src="assets/phone.svg" width="30px">
          <span>555-555-1111</span>
        </div>
      </section>
      <div>
      <span>&copy; 2025 Ink&Code. All rights reserved.</span>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);

