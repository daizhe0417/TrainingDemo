package cn.venice.gen.model;

public class PasswdModel {
	private String passwd;
	private String newpasswd;

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getNewpasswd() {
		return newpasswd;
	}

	public void setNewpasswd(String newpasswd) {
		this.newpasswd = newpasswd;
	}

	public PasswdModel(String passwd, String newpasswd) {
		super();
		this.passwd = passwd;
		this.newpasswd = newpasswd;
	}

	public PasswdModel() {
	}
}
