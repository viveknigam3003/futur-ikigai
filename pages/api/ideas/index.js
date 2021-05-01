import Ideas from "../../../data/Ideas";

export default function handler(req, res) {
  res.status(200).json(Ideas);
}
