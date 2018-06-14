import { Phaser } from '../data/phaser';
import { FormFactor } from '../data/form-factor.enum';

export const PHASERS: Phaser[] = [
  {
    phaserId: 1,
    phaserName: 'Federation Phaser',
    phaserDescription: FormFactor.Compact,
    phaserPrice: 545
  },
  {
    phaserId: 2,
    phaserName: 'Federation Phaser',
    phaserDescription: FormFactor.Pistol_Grip,
    phaserPrice: 600
  }
];
