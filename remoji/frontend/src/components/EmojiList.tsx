import { Emoji } from '../types';
import EmojiBlock from './EmojiBlock';

// TODO: Créer un composant EmojiList, prenant une liste d'emojis et le statut de chargement
// Il doit afficher les emojis et un message 'Loading emojis from backend...' quand ce statut est vrai
// Utiliser .emoji-box sur la div autour et un style italic sur le texte de chargement
export default function EmojiList({ emojis, loading }: { emojis: Emoji[]; loading: boolean }) {
    return (
        <div className="emoji-box">
            {loading && <div style={{ fontStyle: 'italic' }}>Loading emojis from backend...</div>}

            {emojis.map((e) => (
                <EmojiBlock key={e.name} emoji={e}></EmojiBlock>
            ))}
        </div>
    );
}
