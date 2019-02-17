import Api from "./Api";

export default new class DenemeService extends Api {

	deneme() {
		return this.GET('user');
	}
}