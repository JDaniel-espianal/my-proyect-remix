export const meta = () => {
    return [
      { title: "Register" },
      { name: "description", content: "Register page" },
    ];
  };
  
  export default function Register() {
    return (
      <div>
        <h1>Register</h1>
        <form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  