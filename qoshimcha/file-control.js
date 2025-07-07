import { writeFile, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const filePath = join('./users.json');

export const write = async (data) => {
    await writeFile(filePath, JSON.stringify(data, null, 2));
}

export const read = async () => {
    const data = await readFile(filePath, 'utf8');
    return JSON.parse(data);
}