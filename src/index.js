
const onload = () => {
    a = new Address("street", "debugger", 8);
    m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");
    m.getAll();
}