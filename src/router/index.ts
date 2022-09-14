const modules = import.meta.glob("./modules/**/*.ts");
Object.keys(modules).forEach((k) => {
    console.log(k)
//   const mod = modules[k].default || {};
});
