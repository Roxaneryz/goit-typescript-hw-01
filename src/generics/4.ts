type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
    const defaultUser: User = {
        name: "Maria",
        surname: "Marti",
        email: "",
        password: "",
    };
    return { ...defaultUser, ...initialValues };
}

const updateUser=createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
