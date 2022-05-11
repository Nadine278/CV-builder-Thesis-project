import React from 'react';
import "./contact-us.css";
import Dashboard from '../Dashboard';

const Contact = () => {
  return (
    <>< Dashboard/>
    
        <div className='heading'><h2>Got a Project in Mind?</h2></div>
    <div class="containercontactpage">
      <form action="action_page.php">

        <label for="fname">Enter Full Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>


        <label for="country">Country</label>
        <select  id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>

        </select>


        <label for="subject">Message</label>
        <textarea name="subject" placeholder="Write something.." className='textarea'></textarea>
        <input type="submit" value="Submit"></input>
        </form>  
      </div> </>
  );
};
  
export default Contact;
  