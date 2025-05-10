import Game from '../models/game.model';

describe('Game Model', () => {
  it('should validate a valid game object', () => {
    const game = new Game({
      slug: 'test-game',
      title: 'Test Game',
      coverImageUrl: 'http://example.com/image.jpg',
      synopsis: 'A test game synopsis',
      platforms: ['PC'],
      genre: 'Action',
      currentPriceCOP: 50000,
      isBundleOnly: false,
    });

    const validationError = game.validateSync();
    expect(validationError).toBeUndefined();
  });

  it('should throw validation error for missing required fields', () => {
    const game = new Game({});
    const validationError = game.validateSync();
    expect(validationError).toBeDefined();
  });
});
