function mockRegister(username, password) {
  setTimeout(() => {
    console.log(`User ${username} registered successfully.`);
  }, 2000);
}

mockRegister('woxer77', 'password123');
