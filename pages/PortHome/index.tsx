import { Container, TagGreen, Label } from './styles'

const PortHome: React.FC = () => {
    return (
        <Container>
            <div>
                Olá, meu nome é Renan.
            </div>
            <div>
                E este é meu portifolio, muito bem vindo.
            </div>
            <TagGreen>
                <Label>Mobile Developer</Label>
            </TagGreen>
        </Container>
    );
}

export default PortHome;