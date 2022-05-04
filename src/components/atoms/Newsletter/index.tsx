import Button from "../Buttons";

const Newsletter = () => {
    return (
        <aside className="newslatter">
            <h3>Assine nossa news</h3>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
            <div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <Button
                    text={"Enviar"}
                    color={"white"}
                    bgColor={"#DE8F75"}
                    size={"btn__small"}
                    full={false}
                />
            </div>
        </aside>
    );
};

export default Newsletter;
