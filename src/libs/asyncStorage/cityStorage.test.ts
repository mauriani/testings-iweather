import { getStorageCity, removeStorageCity, saveStorageCity} from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity : CityProps = {
  id: "123",
  latitude:123,
  name:"Serra",
  longitude: 123
}

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })


  it("should be return city storaged", async () => {
 
    await saveStorageCity(newCity)

    const response = await getStorageCity()
    expect(response).toEqual(newCity) 
  })


  it("should be remove city storaged", async () => {
    
    await saveStorageCity(newCity)
    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull()
  })
})