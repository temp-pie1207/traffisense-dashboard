export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    id: '49eb2faf41c04d0b',
    name: 'Naman Kashyap',
    role: 'operator',
    email: 'namankashyap484@gmail.com'
  });
}
