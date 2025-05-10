import request from 'supertest';
import app from '../index'; // Asegúrate de exportar `app` desde `index.ts`

describe('Game Routes', () => {
  it('should fetch all games', async () => {
    const response = await request(app).get('/api/games');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return 404 for non-existent route', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
  });
});
