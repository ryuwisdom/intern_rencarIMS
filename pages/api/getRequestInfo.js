import _ from "lodash";

function realTime() {
	const date = new Date();
	const getRealTime = [
		{ id: 1, date: date.getFullYear() },
		{ id: 2, date: date.getMonth() + 1 },
		{ id: 3, date: date.getDate() },
		{ id: 4, date: date.getHours() },
		{ id: 5, date: date.getMinutes() },
	];
	const result = getRealTime.map(
		(list) => `${list.date < 10 ? 0 + "" + list.date : list.date}.`
	);
	const year = result[0];
	const month = result[1];
	const day = result[2].split(".")[0];
	const hours = result[3].split(".")[0];
	const minutes = result[4].split(".")[0];
	const requestTime = year + month + day + " " + hours + ":" + minutes;
	return requestTime;
}

const requestInfo = [
	{
		id: 1,
		car_brand: "현카",
		car_type: "부가티 센토디에치",
		car_number: "01가1111",
		phone_number: "+ 82 10 1234 1234",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "빠른 처리 부탁드립니다.",
	},
	{
		id: 2,
		car_brand: "동카",
		car_type: "롤스로이스 스웹테일",
		car_number: "02나2222",
		phone_number: "+ 82 10 4321 4321",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "안녕하세요.",
	},
	{
		id: 3,
		car_brand: "류카",
		car_type: "파가니 와이라 이몰라",
		car_number: "03다3333",
		phone_number: "+ 82 10 3333 5555",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "조심히 오세요.",
	},
	{
		id: 4,
		car_brand: "규카",
		car_type: "부가티 디보",
		car_number: "07라7777",
		phone_number: "+ 82 10 7777 7777",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "조심히 오세요.",
	},
	{
		id: 5,
		car_brand: "영카",
		car_type: "마이바흐 엑셀레로",
		car_number: "05마5555",
		phone_number: "+ 82 10 1049 4867",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "조심히 오세요.",
	},
	{
		id: 6,
		car_brand: "신카",
		car_type: "부가티 라 부아튀르 누아르",
		car_number: "06바6666",
		phone_number: "+ 82 10 3333 5555",
		location: "서울특별시 강남구",
		date: realTime(), // 2020.12.25 15:10,
		description: "조심히 오세요.",
	},
];

export default async (req, res) => {
	return (res.statusCode = 200), res.json(requestInfo);
};
