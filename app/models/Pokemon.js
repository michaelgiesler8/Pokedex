export class Pokemon {
  constructor(data) {
    this.id = data.id || '';
    this.name = data.name;
    this.img = data.img || data.sprites?.front_default;
    this.backImg = data.backImg || data.sprites?.back_default;
    this.health = data.stats?.[0]?.base_stat || 0;
    this.attack = data.stats?.[1]?.base_stat || 0;
    this.defense = data.stats?.[2]?.base_stat || 0;
    this.speed = data.stats?.[5]?.base_state || 0;
    this.types = data.types?.map((t) => t.type.name) || [];
  }

  get Template() {
    return `
      <div class="card">
        <h3>${this.name}</h3>
        <img src="${this.img}" alt"${this.name}">
        <p>Types: ${this.types.join(', ')}</p>
        <p>HP: ${this.health} | Attack: ${this.attack} | Defense: ${this.defense} | Speed: ${this.speed}</p>
      </div>
    `;
  }
}