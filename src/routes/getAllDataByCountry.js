import { Router } from 'express';
import { location, category, geo } from '../models';

// init router for api routes
const router = Router();

// create test objects for testing.
const geo1 = new geo('1.443', '3.2454', 'Blankenbach', 'Deutschland', 'DE');
const loc1 = new location(1, 'location', 'Test Standort', 'Freetime', 'Monday 01 Jan 2022 18:25', 'Thuesday 02 Jan 2022 08:05', '1.0', geo1);
const geo2 = new geo('2.4355', '2.1223', 'Berlin', 'Deutschland', 'DE')
const loc2 = new location(2, 'location', 'Berliner Tor', 'Freetime', 'Thuesday 28 Dez 2021 02:43', '', '4.3', geo2);
const testcategory = new category(1, 'category', 'Freetime', [loc1, loc2]);

/* 
* GET all Data by Country
* get all locations where available by provided Country
*/
router.get('/:countryId', (req, res) => {
  testcategory.locations.forEach(function (location) {
    if (location.geo.countryCode == req.params.countryId) {
      return res.send(location);
    }
  });
});

export default router;