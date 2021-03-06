const Contact = () => {
  return (
    <div>
      <h2>CONTACT</h2>
      <div>
        <p>Contact us and we'll get back to you within 24 hours.</p>
        <p> London, UK</p>
        <p> +90 5336141531</p>
        <p>info@easysolutioninfotech.com</p>
      </div>
      <div>
        <input id="name" name="name" placeholder="Name" type="text" required />
        <input
          class="form-control"
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          class="form-control"
          id="comments"
          name="comments"
          placeholder="Comment"
          rows="5"
        ></textarea>
        <button class="btn btn-default pull-right" type="submit">
          Send
        </button>
      </div>
    </div>
  );
};
export default Contact;
