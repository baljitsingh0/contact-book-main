<template>
  <div class="container">
    <h1>Contact Book</h1>

    <div class="form-box">
      <h2>Add New Contact</h2>
      <form @submit.prevent="addContact">
        <label>
          Name:
          <input v-model="name" type="text" placeholder="Full Name" required />
        </label>

        <label>
          Email:
          <input v-model="email" type="email" placeholder="Email Address" required />
        </label>

        <label>
          Phone Number:
          <input v-model="number" type="tel" placeholder="Phone Number" required />
        </label>

        <button type="submit">Save Contact</button>
      </form>
    </div>

    <div class="contacts-box" v-if="contacts.length">
      <h2>Saved Contacts</h2>
      <ul class="contacts-list">
        <li v-for="contact in contacts" :key="contact.id" class="contact-card">
          <p><strong>Name:</strong> {{ contact.name }}</p>
          <p><strong>Email:</strong> <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
          <p><strong>Phone:</strong> <a :href="`tel:${contact.number}`">{{ contact.number }}</a></p>
        </li>
      </ul>
    </div>

    <div v-else class="empty-message">
      No contacts saved yet.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactBook',
  data() {
    return {
      name: '',
      email: '',
      number: '',
      contacts: [],
    };
  },
  mounted() {
    const saved = localStorage.getItem('contacts');
    this.contacts = saved ? JSON.parse(saved) : [];
  },
  methods: {
    addContact() {
      const newContact = {
        id: Date.now(),
        name: this.name.trim(),
        email: this.email.trim(),
        number: this.number.trim(),
      };

      this.contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));

      // Clear form fields
      this.name = '';
      this.email = '';
      this.number = '';
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #42b983;
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 30px;
}

.form-box,
.contacts-box {
  background: rgb(202, 91, 91);
  padding: 30px 35px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

h2 {
  font-weight: 700;
  margin-bottom: 25px;
  color: #2c3e50;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

label {
  font-weight: 600;
  color: #34495e;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 7px;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid #ccc;
  outline-color: #4252b9;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #42b983;
}

button {
  margin-top: 10px;
  background-color: #7742b9;
  color: white;
  font-weight: 700;
  font-size: 17px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: background-color 0.25s ease;
}

button:hover {
  background-color: #973677;
}

.contacts-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.contact-card {
  background-color: #1737d2;
  padding: 20px 25px;
  border-radius: 12px;
  border: 1.5px solid #c7e3d7;
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.15);
}

.contact-card p {
  margin: 6px 0;
  font-size: 1rem;
  color: #34495e;
}

.contact-card a {
  color: #2980b9;
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}

.empty-message {
  color: #999;
  font-style: italic;
  font-size: 18px;
}
</style>
