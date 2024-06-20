import { Emoji } from '../types';
import EmojiBlock from './EmojiBlock';

export default function EmojiList({ emojis, loading }: { emojis: Emoji[]; loading: boolean }) {
    return (
        <div className="box" style={{ display: 'flex', justifyContent: 'center' }}>
            {loading && <div style={{ fontStyle: 'italic' }}>Loading emojis from backend...</div>}

            {emojis.map((e) => (
                <EmojiBlock key={e.name} emoji={e}></EmojiBlock>
            ))}
        </div>
    );
}
