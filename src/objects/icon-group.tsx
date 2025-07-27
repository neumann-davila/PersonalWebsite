import { Github, Linkedin } from 'lucide-react';

type IconGroupProps = {
    id: string;
};

export function IconGroup ({ id }: IconGroupProps) {
    return (
        <div id={id}>
            <a className="icon-box" href="https://github.com/neumann-davila" target="_blank">
                <Github className="icon"/>
            </a>
            <a className="icon-box" href="https://linkedin.com/in/neumann-davila" target="_blank">
                <Linkedin className="icon"/>
            </a>
        </div>
    );
}