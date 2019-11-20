import Vue from "vue";
import Vuex, { StoreOptions, GetterTree } from "vuex";
import { RootState } from './types';

import { Powerup } from '@/classes/Powerup.ts';
import { PowerupCount } from '@/classes/PowerupCount.ts';

Vue.use(Vuex);

const storeOptions = {
    state: {
      cookies: 0,
      powerupCounts: Array<PowerupCount>()
    },
    mutations: {
      addCookie(state: RootState) {
          state.cookies++;
      },
      addPowerup(state: RootState, powerup: Powerup) {
          const existingPowerup = state.powerupCounts.find(x => x.id === powerup.id);
  
          if (existingPowerup) {
              existingPowerup.count++;
          } else {
              state.powerupCounts.push(new PowerupCount(powerup.id, 1));
          }
      }
    },
    getters: {
      cookies: (state: RootState) => state.cookies,
      powerupCounts: (state: RootState) => state.powerupCounts
    }
  };

const store = new Vuex.Store<RootState>(storeOptions);

export default store;