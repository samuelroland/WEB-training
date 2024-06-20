import type { Emoji } from '../types';

// TODO: créer un mini composant EmojiImage qui setup juste l'image de 50px de haut avec son lien et son nom comme attribut title et alt. 
// Ne pas afficher le nom (utile pour l'emoji aléatoire).
export default function EmojiImage({ emoji }: { emoji: Emoji }) {
    return <img height="50px" src={emoji.link} alt={emoji.name} title={emoji.name}></img>;
}
