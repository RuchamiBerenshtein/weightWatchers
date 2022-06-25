
const onload = () => {
    a = new Address("street", "", 8);
    m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");
    m.getAll();
}