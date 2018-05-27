pragma solidity ^0.4.23;

contract NotASecurity {
  uint public totalSupply;

  uint public decimals = 18;
  string public symbol = "NOS";
  string public name = "NotASecurity";

  mapping (address => uint) public balanceOf;
  mapping (address => mapping (address => uint)) internal allowed;

  address[10] public benefactors;
  uint public benefactorsBalance;

  event Approval(address indexed _owner, address indexed _spender, uint _value);
  event Transfer(address indexed _from, address indexed _to, uint _value);

  constructor() public {
    uint _fee = 10;
    benefactors[0] = msg.sender;
    balanceOf[msg.sender] = _fee;
    totalSupply = _fee;
    benefactorBalance = _fee;
  }

  function buy() payable public returns (uint) {
    uint _wei = msg.value;
    address _investor = msg.sender;

    require(_wei > 0);

    balanceOf[_investor] += _wei;
    totalSupply += _wei;

    require(distribute(_wei));
    require(reorganize(_wei, _investor));

    return _wei;
  }

  function () payable public {
    buy();
  }

  function distribute(uint _amount) private returns (bool) {
    for (uint _i = 0; _i < benefactors.length; _i++) {
      address _benefactor = benefactors[_i];
      uint _benefactorBalance = balanceOf[_benefactor];
      uint _amountToTransfer = (_benefactorBalance * _amount) / (benefactorsBalance * _amount);

      if (_benefactor != address(0)) {
        _benefactor.transfer(_amountToTransfer);
      }
    }

    return true;
  }

  function reorganize(uint _amount, address _investor) private returns (bool) {
    for (uint _i = 0; _i < benefactors.length; _i++) {
    }

    // if _investor's balance is greater than the lowest benefactor's balance, hold onto both
    // if "" swap out lowest benefactor for investor
    // adjustment = balanceOf[newBenefactor] - balanceOf[benefactorToRemove]
    // handle case where benefactor buys more
    return true;
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

    // reorganize for both addresses

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
