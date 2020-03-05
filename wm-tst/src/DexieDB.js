import Dexie from 'dexie';

const db = new Dexie('wm4');
db.version(1).stores({
    writer: `id,state,lastupdated`
});

export default db;