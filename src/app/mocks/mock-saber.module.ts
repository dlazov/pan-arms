import { Saber } from '../data/saber';
import { BladeColor } from '../data/blade-color.enum';
import { BladeCount } from '../data/blade-count.enum';

export const SABERS: Saber[] = [
  {
    saberId: 1,
    saberName: 'Sith Lightsaber',
    saberBladeColor: BladeColor.Red,
    saberBladeCount: BladeCount.Single,
    saberPrice: 1000
  },
  {
    saberId: 2,
    saberName: 'Sith Lightsaber',
    saberBladeColor: BladeColor.Red,
    saberBladeCount: BladeCount.Double,
    saberPrice: 1750
  },
  {
    saberId: 3,
    saberName: 'Sith Lightsaber',
    saberBladeColor: BladeColor.Blue,
    saberBladeCount: BladeCount.Single,
    saberPrice: 1125
  },
  {
    saberId: 4,
    saberName: 'Sith Lightsaber',
    saberBladeColor: BladeColor.Blue,
    saberBladeCount: BladeCount.Double,
    saberPrice: 1850
  },
  {
    saberId: 5,
    saberName: 'Sith Lightsaber',
    saberBladeColor: BladeColor.Green,
    saberBladeCount: BladeCount.Single,
    saberPrice: 1250
  }
];
