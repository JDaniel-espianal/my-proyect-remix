export const meta = () => {
    return [
      { title: "Login" },
      { name: "description", content: "Login page" },
    ];
  };
  
  export default function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form method="post">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  