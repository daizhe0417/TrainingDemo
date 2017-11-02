package cn.venice.gen.model;

/**
 * 用户身份信息实体
 */
public class UserInfoModel implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 538989529253874150L;
	private String userno;
	private String username;
	private String roleno;
	private String rolename;
	private String bmdm;
	private String bmmc;
	private String deltag;

	// Constructors

	/** default constructor */
	public UserInfoModel() {
	}

	/** minimal constructor */
	public UserInfoModel(String userno) {
		this.userno = userno;
	}

	/** full constructor */
	public UserInfoModel(String userno, String username, String roleno,
			String rolename, String bmdm, String bmmc, String deltag) {
		this.userno = userno;
		this.username = username;
		this.roleno = roleno;
		this.rolename = rolename;
		this.bmdm = bmdm;
		this.bmmc = bmmc;
		this.deltag = deltag;
	}

	// Property accessors

	public String getUserno() {
		return this.userno;
	}

	public void setUserno(String userno) {
		this.userno = userno;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRoleno() {
		return this.roleno;
	}

	public void setRoleno(String roleno) {
		this.roleno = roleno;
	}

	public String getRolename() {
		return this.rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	public String getBmdm() {
		return this.bmdm;
	}

	public void setBmdm(String bmdm) {
		this.bmdm = bmdm;
	}

	public String getBmmc() {
		return this.bmmc;
	}

	public void setBmmc(String bmmc) {
		this.bmmc = bmmc;
	}

	public String getDeltag() {
		return this.deltag;
	}

	public void setDeltag(String deltag) {
		this.deltag = deltag;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserInfoModel))
			return false;
		UserInfoModel castOther = (UserInfoModel) other;

		return ((this.getUserno() == castOther.getUserno()) || (this
				.getUserno() != null && castOther.getUserno() != null && this
				.getUserno().equals(castOther.getUserno())))
				&& ((this.getUsername() == castOther.getUsername()) || (this
						.getUsername() != null
						&& castOther.getUsername() != null && this
						.getUsername().equals(castOther.getUsername())))
				&& ((this.getRoleno() == castOther.getRoleno()) || (this
						.getRoleno() != null && castOther.getRoleno() != null && this
						.getRoleno().equals(castOther.getRoleno())))
				&& ((this.getRolename() == castOther.getRolename()) || (this
						.getRolename() != null
						&& castOther.getRolename() != null && this
						.getRolename().equals(castOther.getRolename())))
				&& ((this.getBmdm() == castOther.getBmdm()) || (this.getBmdm() != null
						&& castOther.getBmdm() != null && this.getBmdm()
						.equals(castOther.getBmdm())))
				&& ((this.getBmmc() == castOther.getBmmc()) || (this.getBmmc() != null
						&& castOther.getBmmc() != null && this.getBmmc()
						.equals(castOther.getBmmc())))
				&& ((this.getDeltag() == castOther.getDeltag()) || (this
						.getDeltag() != null && castOther.getDeltag() != null && this
						.getDeltag().equals(castOther.getDeltag())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getUserno() == null ? 0 : this.getUserno().hashCode());
		result = 37 * result
				+ (getUsername() == null ? 0 : this.getUsername().hashCode());
		result = 37 * result
				+ (getRoleno() == null ? 0 : this.getRoleno().hashCode());
		result = 37 * result
				+ (getRolename() == null ? 0 : this.getRolename().hashCode());
		result = 37 * result
				+ (getBmdm() == null ? 0 : this.getBmdm().hashCode());
		result = 37 * result
				+ (getBmmc() == null ? 0 : this.getBmmc().hashCode());
		result = 37 * result
				+ (getDeltag() == null ? 0 : this.getDeltag().hashCode());
		return result;
	}

}