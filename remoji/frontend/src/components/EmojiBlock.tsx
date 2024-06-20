import { Emoji } from '../types';
import EmojiImage from './EmojiImage';

// TODO: Créer un composant EmojiBlock comme wrapper autour de EmojiImage pour y ajouter le nom au dessus
// Utiliser .emoji-block et .emoji-name
export default function EmojiBlock({ emoji }: { emoji: Emoji }) {
    return (
        <div className="emoji-block">
            <div className="emoji-name">{emoji.name}</div>
            <EmojiImage emoji={emoji}></EmojiImage>
        </div>
    );
}
