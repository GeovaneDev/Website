import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import '../public/style.css';

const Index = () => {
    return (
        <>
            <NextSeo
                title="GeovaneDev - Desenvolvedor Jovem"
                description="GeovaneDev, um entusiasta da tecnologia com apenas 16 anos, é um desenvolvedor iniciante apaixonado pelo universo open source. Descubra suas experiências e projetos emocionantes."
                author="GeovaneDev"
                lang="pt-BR"
            />
            <Navbar />
            <header id="about" className="py-5 text-light text-center body">
                <div className="container">
                    <h1 className="display-4 typing">Projetos do GeovaneDev</h1>
                    <p className="lead">Olá! Sou Geovane, um estudante e desenvolvedor iniciante de 16 anos. Abaixo você encontra alguns dos meus projetos públicos e OpenSource. Sinta-se à vontade para explorar e saber mais detalhes sobre cada um deles.</p>
                </div>
            </header>

            <section id="projects" className="py-5 bg-custom-dark">
                <div className="container">
                    <h2 className="mb-4 text-center text-light">Projetos</h2>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h3 className="card-title">Site para a Banda Little Dolly</h3>
                                    <p className="card-text">Um site desenvolvido usando HTML e CSS para apresentar e divulgar a banda.</p>
                                    <a href="https://littledolly.com.br/" className="btn btn-primary mr-auto">Ver o site</a>
                                    <a href="https://github.com/bandalittledolly/Website" className="btn btn-secondary">Ver código</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h3 className="card-title">Site do FlexTux</h3>
                                    <p className="card-text">Um site desenvolvido usando HTML e CSS para apresentar o FlexTux. (Descontinuado)</p>
                                    <a href="https://flextux.pages.dev" className="btn btn-primary">Ver o site</a>
                                    <a href="https://github.com/FlexTux/FlexTux-Website" className="btn btn-secondary">Ver código</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h3 className="card-title">FlexTux</h3>
                                    <p className="card-text">Um bot para o Discord desenvolvido em JavaScript (<a href="https://discord.js.org/">Discord.js</a>). (Descontinuado)</p>
                                    <a href="https://flextux.pages.dev/invite" className="btn btn-primary">Adicionar o Bot</a>
                                    <a href="https://github.com/FlexTux/FlexTux" className="btn btn-secondary">Ver código</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h3 className="card-title">AutoClicker Simples</h3>
                                    <p className="card-text">Um AutoClicker desenvolvido em C++. (Descontinuado)</p>
                                    <a href="https://github.com/GeovaneDev/AutoClick" className="btn btn-primary">Ver código</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Index;
