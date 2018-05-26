pragma solidity ^0.4.23;

contract NotASecurity {
  uint public totalSupply;

  uint public decimals = 18;
  string public symbol = "NOS";
  string public name = "NotASecurity";

  mapping (address => uint) public balanceOf;
  mapping (address => mapping (address => uint)) internal allowed;

  event Approval(address indexed _owner, address indexed _spender, uint _value);
  event Transfer(address indexed _from, address indexed _to, uint _value);

  constructor() public {
    uint fee = 10;
    balanceOf[msg.sender] = fee;
    totalSupply = fee;
  }

  function buy() payable public returns (uint) {
    uint _wei = msg.value;

    require(_wei > 0);

    balanceOf[msg.sender] += _wei;
    totalSupply += _wei;

    return _wei;
  }

  function () payable public {
    buy();
  }

  function _transfer(
    address _from,
    address _to,
    uint _amount
  ) internal returns (bool success) {
    require(_to != address(0));
    require(_to != address(this));
    require(_amount > 0);
    require(balanceOf[_from] >= _amount);
    require(balanceOf[_to] + _amount > balanceOf[_to]);

    balanceOf[_from] -= _amount;
    balanceOf[_to] += _amount;

    emit Transfer(msg.sender, _to, _amount);

    return true;
  }

  function transfer(address _to, uint _amount) public returns (bool success) {
    return _transfer(msg.sender, _to, _amount);
  }

  function transferFrom(address _from, address _to, uint _amount) external returns (bool success) {
    require(allowed[_from][msg.sender] >= _amount);

    bool _tranferSuccess = _transfer(_from, _to, _amount);
    if (_tranferSuccess) {
      allowed[_from][msg.sender] -= _amount;
      return true;
    } else {
      return false;
    }
  }

  function approve(address _spender, uint _value) external returns (bool success) {
    allowed[msg.sender][_spender] = _value;
    emit Approval(msg.sender, _spender, _value);
    return true;
  }

  function allowance(address _owner, address _spender) external constant returns (uint remaining) {
    return allowed[_owner][_spender];
  }
}
