import Dexie from 'dexie';

const db = new Dexie('wavemaker');
db.version(1).stores({
    writer: `id,state,lastupdated`,
    tools: `uuid,tool, title ,state,lastupdated`,
    cards: `uuid,carddata, tags, lastupdated`
});

export default db;