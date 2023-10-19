const client = [
  { nome: "Pedro", idade: "16", CPF: "111.222.333-123" },
  { nome: "Creatino", idade: "29", CPF: "111.222.333-123" },
  { nome: "Trembolono", idade: "49", CPF: "111.222.333-123" },
  { nome: "Cleber", idade: "30", CPF: "111.222.333-123" },
  { nome: "Anitto", idade: "19", CPF: "111.222.333-123" },
];

const Contact = () => {
  console.log(client);
  return (
    <>
      <h1>Contact</h1>
      {client.map((item) => (
      <div key={item.CPF}>
        Cliente - {item.nome} | Idade - {item.idade}
      </div>
      ))}
    </>
  );
};

export default Contact;
