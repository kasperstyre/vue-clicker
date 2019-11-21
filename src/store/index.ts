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
              const cookiePrice = Math.floor(powerup.basePrice * (existingPowerup.count * powerup.multiplier));

              state.cookies -= cookiePrice;
              existingPowerup.count++;
          } else {
              state.cookies -= powerup.basePrice;
              state.powerupCounts.push(new PowerupCount(powerup.id, 1, powerup.cookiesPerSecond));
          }
      },
      addPowerupCookies(state: RootState) {
          let totalCookies = 0;

          state.powerupCounts.forEach((powerupCount: PowerupCount) => {
            totalCookies += (powerupCount.count * powerupCount.cookiesPerSecond);
          });

          state.cookies += totalCookies;
      }
    },
    getters: {
      cookies: (state: RootState) => state.cookies,
      powerupCounts: (state: RootState) => state.powerupCounts,
      totalCps: (state: RootState) => {
          let totalCps = 0;

          state.powerupCounts.forEach((powerupCount: PowerupCount) => {
              totalCps += powerupCount.cookiesPerSecond * powerupCount.count;
          });

          return totalCps;
      }
    }
  };

const store = new Vuex.Store<RootState>(storeOptions);

export default store;