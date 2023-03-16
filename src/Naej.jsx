const Suma = (n1, n2) => {
    return n1 + n2;
}

const newMessage = {
    message: 'holaa',
    para: 'Jean',
};

export const Naej = () => {
    
    return (
    <>
        <code>{Suma(2, 3)}</code>
        <code>{JSON.stringify( newMessage )}</code>
        <p>Soy un subtituloo</p>
    </>
  );
}
